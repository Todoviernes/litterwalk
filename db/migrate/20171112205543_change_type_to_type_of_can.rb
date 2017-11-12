class ChangeTypeToTypeOfCan < ActiveRecord::Migration[5.1]
  def change
  	rename_column :cans, :type, :typeOfCan
  end
end
