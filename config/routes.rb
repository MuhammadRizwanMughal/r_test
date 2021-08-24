Rails.application.routes.draw do
  resources :posts
  resources :categories
  root to: "posts#index"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
