class Beer < ActiveRecord::Base


  validates :name, :presence => true
  validates :style, :presence => true
  validates :alcohol_content, :presence => true
end
