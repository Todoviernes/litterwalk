class AddTosToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :tos_agreement, :boolean
  end
end
