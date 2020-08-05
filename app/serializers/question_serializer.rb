class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question,:teaming_stages,:appears, :frequency, :question_type,:role, :required, :conditions, :mapping, 

  def role
	return Role.where(id: object.role_id).first&.role
  end

  def mapping
	return Mapping.where(id: object.mapping_id).first&.name
  end
end
