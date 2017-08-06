Rails.application.routes.draw do
  get 'welcome/index'
    get'welcome/logged'
    get 'players/index'
    get 'characters/class'
    get 'characters/stats'

  
#TODO Nest resources according to Active Record Associations
  resources :dms
  resources :players
  resources :characters
  resources :npcs
  resources :games

root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
