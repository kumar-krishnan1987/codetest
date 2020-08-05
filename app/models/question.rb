class Question < ApplicationRecord
  validates_presence_of :question,:teaming_stages,:appears, :frequency, :question_type, :role_id, :required, :conditions, :mapping_id
end