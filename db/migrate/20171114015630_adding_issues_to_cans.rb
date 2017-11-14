class AddingIssuesToCans < ActiveRecord::Migration[5.1]
  def change
  	add_column :cans, :issues, :string
  end
end
