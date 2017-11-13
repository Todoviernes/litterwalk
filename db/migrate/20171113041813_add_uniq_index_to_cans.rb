class AddUniqIndexToCans < ActiveRecord::Migration[5.1]
  def change
  	add_index :cans, [:latitude, :longitude], unique: true
  end
end
