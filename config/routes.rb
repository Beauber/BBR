Rails.application.routes.draw do
  post "/provider_token" => "provider_token#create"
  post "/users" => "users#create"
  post "/providers" => "providers#create"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1 do
    get "/providers" => "providers#index"
    post "/providers" => "providers#create"
    patch "/providers/:id" => "providers#update"
    get "/providers/:id" => "providers#show"
    delete "/providers/:id" => "providers#destroy"

    get "/users" => "users#index"
    post "/users" => "users#create"
    patch "/users/:id" => "users#update"
    get "/users/:id" => "users#show"
    delete "/users/:id" => "users#destroy"

    get "/services" => "services#index"
    post "/services" => "services#create"
    patch "/services/:id" => "services#update"
    get "/services/:id" => "services#show"
    delete "/services/:id" => "services#destroy"

    get "/categories" => "categories#index"
    post "/categories" => "categories#create"
    patch "/categories/:id" => "categories#update"
    get "/categories/:id" => "categories#show"
    delete "/categories/:id" => "categories#destroy"

    get "/sub_categories" => "sub_categories#index"
    post "/sub_categories" => "sub_categories#create"
    patch "/sub_categories/:id" => "sub_categories#update"
    get "/sub_categories/:id" => "sub_categories#show"
    delete "/sub_categories/:id" => "sub_categories#destroy"   
  end
end
