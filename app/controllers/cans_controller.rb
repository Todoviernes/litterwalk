class CansController < ApplicationController



def index
    @cans = Can.order('created_at DESC')
    @can = Can.all
    @all = []
    gon.all = @all
    gon.cans = @can.map do |can| 
        each = { lat: can.latitude, lng: can.longitude, typeOfCan: can.typeOfCan }
        @all << each
     end
    
  end

  def new
    @can = Can.new
  end

  def create
    @can = Can.new(can_params)
    if @can.save
      flash[:success] = "Can added!"
      redirect_to cans_path
    else
      render 'new'
    end
  end

  def show
  	@can = Can.find(params[:id])
  end

  private

  def can_params
    params.require(:can).permit(:typeOfCan, :latitude, :longitude)
  end

end
