class CansController < ApplicationController



def index
    @cans = Can.order('created_at DESC')
    @can = Can.all
    @all = []
    gon.all = @all
    gon.cans = @can.map do |can| 
        each = { lat: can.latitude, lng: can.longitude, typeOfCan: can.typeOfCan, id: can.id.to_s }
        @all << each
     end
    
  end

  def new
    @can = Can.new
    @cans = Can.all
    @all = []
    gon.all = @all
    gon.cans = @cans.map do |can| 
        each = { lat: can.latitude, lng: can.longitude, typeOfCan: can.typeOfCan, id: can.id.to_s }
        @all << each
     end
  end

  def create
    @can = Can.new(can_params)
    if @can.save 
      flash[:success] = "Can added!"
      redirect_to cans_path
    else
      flash[:error] = "Can already exists!"
      redirect_to cans_path
    end
  end

  def show
  	@can = Can.find(params[:id])
  end

  def edit
    @can = Can.find(params[:id])
  end

  def update
        @can = Can.find(params[:id])
    if @can.update_attributes(can_params) 
      flash[:success] = "Issue added!"
      redirect_to cans_path
    else
      flash[:error] = "Problem is being addressed!"
      redirect_to cans_path
    end
  end

  private

  def can_params
    params.require(:can).permit(:typeOfCan, :latitude, :longitude, :address, :issues, :backLink)
  end

end
