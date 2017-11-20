class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    @url  = 'http://litterwalk.co'
    mail(to: @user.email, subject: 'Welcome to LitterWalk')
  end
  
end
