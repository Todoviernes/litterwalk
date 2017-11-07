Rails.application.routes.draw do
  resources :cans
  #devise_for :users
  resources :templates
  root "templates#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users, only: [:show]


end
