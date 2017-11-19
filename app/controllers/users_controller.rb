class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def home_page
  	@cans = Can.order('created_at DESC')
    @can = Can.all
    @all = []
    gon.all = @all
    gon.cans = @can.map do |can| 
        each = { lat: can.latitude, lng: can.longitude, typeOfCan: can.typeOfCan, id: can.id.to_s }
        @all << each
    end
  end
end