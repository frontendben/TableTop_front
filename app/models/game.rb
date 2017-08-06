class Game < ApplicationRecord
	belongs_to :dm 
	has_many :npcs, through: :dm
	has_many :characters
	has_many :players, through: :characters
end
