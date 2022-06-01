package com.sacavix.todoapp.controller;

import com.sacavix.todoapp.persistence.entity.Task;
import com.sacavix.todoapp.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/create")
    public Task createTask(@RequestBody Task task) {
       return this.taskService.createTask(task);
    }

    @GetMapping
    public List<Task> findAll(){
        return this.taskService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        this.taskService.deleteById(id);
        return ResponseEntity.noContent().build();
    }


    @PatchMapping("/update/{id}")
    public ResponseEntity<Void> update(@RequestBody Task task, @PathVariable("id") Long id) {
        this.taskService.updateTask(id);
        return ResponseEntity.noContent().build();
    }




}
