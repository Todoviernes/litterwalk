class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def home_page
  end
end