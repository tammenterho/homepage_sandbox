package com.hp_back2.hp_back2;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
	@CrossOrigin(origins = "http://localhost:3000")
	 @GetMapping("/comments")
	    public List<Comment> getAllComments() {
	        return commentRepo.findAll();
	    }
	 
	@CrossOrigin(origins = "http://localhost:3000")
	 @PostMapping("/comments")
	 Comment newComment(@RequestBody Comment newComment) {
		 return commentRepo.save(newComment);
	 }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @DeleteMapping("/comments/{id}")
	 public ResponseEntity<String> deleteComment(@PathVariable Integer id) {
	     try {
	         commentRepo.deleteById(id);
	         return new ResponseEntity<>("Comment deleted successfully", HttpStatus.OK);
	     } catch (Exception e) {
	         return new ResponseEntity<>("Failed to delete comment", HttpStatus.INTERNAL_SERVER_ERROR);
	     }
	 }

}
