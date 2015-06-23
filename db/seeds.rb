# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: "Jay", password: "beer")
User.create(name: "Mike", password: "alcoholic")
Beer.create(name: "Goose IPA", style: "IPA", alcohol_content: 5.9)
