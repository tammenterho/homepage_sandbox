package com.hp_back2.hp_back2.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hp_back2.hp_back2.Comment;

@RepositoryRestResource
public interface CommentRepo extends JpaRepository<Comment, Integer> {

}
