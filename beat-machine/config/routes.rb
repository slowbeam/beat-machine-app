Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :beats, only: [:index, :show, :create, :update, :destroy]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
