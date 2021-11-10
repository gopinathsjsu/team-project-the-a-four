package com.sjsu.cmpe202.dao;

import com.sjsu.cmpe202.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String> {

}
