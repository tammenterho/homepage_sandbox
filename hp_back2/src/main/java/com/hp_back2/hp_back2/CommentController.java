package com.hp_back2.hp_back2;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	 
	 @PostMapping("/comments")
	 Comment newComment(@RequestBody Comment newComment) {
		 return commentRepo.save(newComment);
	 }
	 
	 @DeleteMapping("/comments/{id}")
	 void deleteComment(@PathVariable Integer id) {
		 commentRepo.deleteById(id);
	 }

}
