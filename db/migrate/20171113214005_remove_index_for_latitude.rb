class RemoveIndexForLatitude < ActiveRecord::Migration[5.1]
  def change
  	remove_index :cans, [:latitude, :longitude]
  end
end
