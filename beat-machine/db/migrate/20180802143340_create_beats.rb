class CreateBeats < ActiveRecord::Migration[5.2]
  def change
    create_table :beats do |t|
      t.string :name
      t.string :steps
      t.integer :tempo
      t.float :shuffle

      t.timestamps
    end
  end
end
