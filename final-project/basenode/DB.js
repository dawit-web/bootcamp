const knex = require ('knex');

const DB = knex({
    client:'pg',
    connection:{
      host: '127.0.0.1',
      user: 'postgres',
      password: 'run',
      database: 'nutrition'
    }
  })

    
  const Users = (first_name, last_name, email, phone, user_name ,password ) =>{
    return DB('users')
    .insert([{first_name:first_name, last_name:last_name, email:email, phone:phone, user_name:user_name , password:password}])
    .returning(['*']);
  }

  const Connect = (user_name, password) => {
    return DB('users')
    .select('user_id','user_name', 'password')
    .from('users')
    .where({user_name:user_name})

  }

  const getUserid = (user_name) => {
    return DB('users')
    .select('user_id')
    .where({user_name:user_name})
  }

  const retrivepass = (user_name) => {
    return DB('users')
    .select('password')
    .where({user_name:user_name})
  }

  const Favorite = (user_id, calories , cholesterol_mg ,carbohydrates_total_g,fat_saturated_g, fat_total_g,fiber_g, name ,protein_g, potassium_mg, sodium_mg ,sugar_g) => {
       return DB('favorites')
      .insert([{user_id:user_id,calories:calories , cholesterol_mg:cholesterol_mg ,carbohydrates_total_g:carbohydrates_total_g,  fat_saturated_g:fat_saturated_g, fat_total_g:fat_total_g,fiber_g:fiber_g, name:name ,protein_g:protein_g, potassium_mg:potassium_mg ,sugar_g:sugar_g}])
      .returning('*')     
  }

  const userFavor = (user_id) => {
    return DB('favorites')
    .select('*')
    .where({user_id:user_id})
  }


  const deleteFavor = (favorite) => {
  return DB('favorites')
  .del()
  .where({favorite:favorite})
  
  }



module.exports ={
    Users,
    Connect,
    retrivepass,
    Favorite,
    userFavor,
    deleteFavor,
    getUserid 
}

