Rails.application.routes.draw do
  namespace :admin do
    resources :users
    resources :cans
    resources :pictures

    root to: "users#index"
  end

  #devise_for :users
  root "users#home_page"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users, only: [:show]

  resources :cans, except: [:destroy] 
  post "cans/:id/pictures" => 'cans#add_picture', as: "add_picture"
end
