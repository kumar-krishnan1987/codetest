Rails.application.routes.draw do

  root to: 'home#index'

  post 'home/import', to: 'home#import'
  get 'home/list', to: 'home#list'

  namespace :api do 
    namespace :v1 do 
     resources :questions, only: [:index, :create, :destroy, :update, :show]
    end 
  end 
end
