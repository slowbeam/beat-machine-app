# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

beat1 = Beat.create(name: 'dankstep', steps:'[{instrument: kick, step: 1}]', tempo: 120, shuffle: 2)
beat2 = Beat.create(name: 'skunkstep', steps:'[{instrument: snare, step: 2}]', tempo: 100, shuffle: 1)
