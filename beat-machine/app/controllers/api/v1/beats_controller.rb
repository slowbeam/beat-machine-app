class Api::V1::BeatsController < ApplicationController
  before_action :find_beat, only: [:show, :update, :destroy]

  def index
    @beats = Beat.all
    render json: @beats, status: 200
  end

  def show
    render json: @beat, status: 200
  end

  def create
    @beat = Beat.create(beat_params)
    render json: @beat, status: 201
  end

  def update
    @beat.update(beat_params)
    render json: @beat, status: 202
  end

  def destroy
    @beat.destroy
  end

  private

  def beat_params
    params.permit(:name, :steps, :tempo, :shuffle)
  end

  def find_beat
    @beat = Beat.find(params[:id])
  end
end
