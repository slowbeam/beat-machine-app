class BeatSerializer < ActiveModel::Serializer
  attributes :id, :name, :steps, :tempo, :shuffle
end
