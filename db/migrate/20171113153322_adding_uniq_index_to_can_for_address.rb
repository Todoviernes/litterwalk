class AddingUniqIndexToCanForAddress < ActiveRecord::Migration[5.1]
  def change
  	add_index :cans, :address, unique: true
  end
end
