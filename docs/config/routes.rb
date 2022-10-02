Rails.application.routes.draw do
  resources :notes
  mount ActionCable.server => '/cable'
end
