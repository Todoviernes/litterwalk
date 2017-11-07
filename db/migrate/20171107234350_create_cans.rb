class CreateCans < ActiveRecord::Migration[5.1]
  def change
    create_table :cans do |t|
      t.string :can_type
      t.string :address
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
