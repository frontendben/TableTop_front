class CreateNpcs < ActiveRecord::Migration[5.1]
  def change
    create_table :npcs do |t|

      t.timestamps
    end
  end
end
