package com.hp_back2.hp_back2;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hp_back2.hp_back2.repo.CommentRepo;

@RestController
public class CommentController {
	
	@Autowired
	private CommentRepo commentRepo;
	

	 @GetMapping("/comments")
	    public List<Comment> getAllComments() {
	        return commentRepo.findAll();
	    }

}
