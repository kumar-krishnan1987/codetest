class Api::V1::QuestionsController < ApplicationController
  def index
    render json: Question.all
  end

  def show
    question = Question.find(params[:id]) rescue nil
    if question 
      render json: question
    else
      render json: {message: 'record misssing', status: 422}
    end
  end

  def create
    question = Question.create(question_params)
    if question.save
      render json: {question: question, status: 'created'}
    else
      render json: { 
           errors: question.errors
         },
         status: 422
    end
  end

  def destroy
    question = Question.find(params[:id]) rescue nil
    if question
      question.destroy
      render json: {message: 'deleted'}
    else
      render json: {message: 'record not found', status: 422}
    end
  end

  def update
    question = Question.find(params[:id]) rescue nil
    question.update_attributes(question_params) if question
    if question 
      if question.errors
        render json: { 
           errors: question.errors
         },
         status: 422
      else
        render json: question
      end
    else
      render json: {message: 'record misssing', status: 422}
    end
  end

  private

  def question_params
    params.require(:question).permit(:id,:question, :teaming_stages, :appears, :frequency, :question_type, :role_id, :required, :conditions, :mapping_id)
  end
end