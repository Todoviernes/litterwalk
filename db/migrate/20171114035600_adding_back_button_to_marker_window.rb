class AddingBackButtonToMarkerWindow < ActiveRecord::Migration[5.1]
  def change
  	add_column :cans, :backLink, :string
  end
end
