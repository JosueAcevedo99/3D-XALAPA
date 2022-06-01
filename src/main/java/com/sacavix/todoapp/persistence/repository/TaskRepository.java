package com.sacavix.todoapp.persistence.repository;

import com.sacavix.todoapp.persistence.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {


    @Modifying
    @Query(value = "UPDATE PRODUCTO SET TITLE='exitUpdate' WHERE ID=:id", nativeQuery = true)
    public void updateProducto(@Param("id") Long id);
}
