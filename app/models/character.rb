class Character < ApplicationRecord
	belongs_to :player
	has_many :games
	has_many :dms, through: :games
end
