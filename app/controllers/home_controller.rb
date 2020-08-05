require 'csv'

class HomeController < ApplicationController
  def index
    if Question.any?
    	redirect_to home_list_path
    end
  end

  def import
  	
  	rowarray = Array.new
    myfile = params[:file]
    
    CSV.foreach(myfile.path) do |row|
    	#raise row.count.inspect
      rowarray << row
      @rowarraydisp = rowarray
    end
     @rowarraydisp[1..-1].each do |a|
     	map = Mapping.find_or_create_by(name: a[9])
     	role = Role.find_or_create_by(role: a[6])
     	Question.create!(question: a[1], teaming_stages: a[2], appears: a[3], frequency: a[4], question_type: a[5], role_id: role.id, required: a[7], conditions: a[8], mapping_id: map.id)
     end
     redirect_to root_path
  end
  def list
  end
end
	