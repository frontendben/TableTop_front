class Dm < ApplicationRecord
	has_many :games, dependent: :destroy
	has_many :npcs, dependent: :destroy
	has_many :characters, through: :games
end
