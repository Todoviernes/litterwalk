class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.belongs_to :can, foreign_key: true
      t.boolean :selected
      t.boolean :approved

      t.timestamps
    end
  end
end
