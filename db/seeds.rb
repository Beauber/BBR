# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Category.create([
#   {category: 'Hair'},
#   {category: 'Face'},
#   {category: 'Nails'}
# ])

# SubCategory.create([
#   {sub_category: 'Haircut', category_id: 1},
#   {sub_category: 'Haircolor', category_id: 1},
#   {sub_category: 'Hairstyling', category_id: 1},
#   {sub_category: 'Barbers', category_id: 1},
#   {sub_category: 'Hair Chemical Texture', category_id: 1},
#   {sub_category: 'Hair Extensions', category_id: 1},
#   {sub_category: 'Makeup', category_id: 2},
#   {sub_category: 'Skin', category_id: 2},
#   {sub_category: 'Eyebrows', category_id: 2},
#   {sub_category: 'Lashes', category_id: 2},
#   {sub_category: 'Nails', category_id: 3},
# ])

# Service.create([
#   { service_type: 'Root Retouch', sub_category_id: 2 }, 
#   { service_type: 'All Over Color', sub_category_id: 2 }, 
#   { service_type: 'Highlights', sub_category_id: 2 }, 
#   { service_type: 'Balayage', sub_category_id: 2 }, 
#   { service_type: 'Vivids', sub_category_id: 2 }, 
#   { service_type: 'Blondes', sub_category_id: 2 }, 
#   { service_type: 'Color Correction', sub_category_id: 2 }, 
#   { service_type: 'Blowout', sub_category_id: 3 }, 
#   { service_type: 'Updos', sub_category_id: 3 }, 
#   { service_type: 'Bridal', sub_category_id: 3 }, 
#   { service_type: 'Wigs', sub_category_id: 3 }, 
#   { service_type: 'Haircut', sub_category_id: 4 }, 
#   { service_type: 'Beard', sub_category_id: 4 }, 
#   { service_type: 'Haircolor for men', sub_category_id: 4 }, 
#   { service_type: 'Keratin Service', sub_category_id: 5 }, 
#   { service_type: 'Perms', sub_category_id: 5 }, 
#   { service_type: 'Relaxers', sub_category_id: 5 }, 
#   { service_type: 'Tape', sub_category_id: 6 }, 
#   { service_type: 'Weaved', sub_category_id: 6 }, 
#   { service_type: 'Halo/Hairband', sub_category_id: 6 }, 
#   { service_type: 'Bonded', sub_category_id: 6 }, 
#   { service_type: 'Weft', sub_category_id: 6 }, 
#   { service_type: 'Cosmetic/Fashion', sub_category_id: 7 }, 
#   { service_type: 'Bridal/Special Occasion', sub_category_id: 7 }, 
#   { service_type: 'Film/Tv/Theater', sub_category_id: 7 }, 
#   { service_type: 'Facials', sub_category_id: 8 }, 
#   { service_type: 'Back Facial', sub_category_id: 8 }, 
#   { service_type: 'Wax/Tweezers', sub_category_id: 9 }, 
#   { service_type: 'Threading', sub_category_id: 9 }, 
#   { service_type: 'Microblading', sub_category_id: 9 }, 
#   { service_type: 'Extensions', sub_category_id: 10 }, 
#   { service_type: 'Perm/Dye', sub_category_id: 10 }, 
#   { service_type: 'Manicure/Pedicure', sub_category_id: 11 }, 
#   { service_type: 'Gel Color', sub_category_id: 11 }, 
#   { service_type: 'Acrylic/Silk Extensions', sub_category_id: 11 }, 
#   { service_type: 'Nail Art', sub_category_id: 11 }, 
# ])

ProviderType.create([
  {provider_type: "Salon"},
  {provider_type: "Independent"}
])