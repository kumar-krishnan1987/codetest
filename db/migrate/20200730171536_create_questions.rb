class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :teaming_stages
      t.integer :appears
      t.integer :frequency
      t.string :question_type
      t.integer :role_id
      t.boolean :required
      t.string :conditions
      t.integer :mapping_id

      t.timestamps
    end
  end
end
