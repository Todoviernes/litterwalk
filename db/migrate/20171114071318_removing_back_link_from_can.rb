class RemovingBackLinkFromCan < ActiveRecord::Migration[5.1]
  def change
  	remove_column :cans, :backLink
  end
end
