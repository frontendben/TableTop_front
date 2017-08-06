class Npc < ApplicationRecord
	belongs_to :dm
	has_many :games, through: :dm
end
