Use TaskDB;

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name ='GEtAllTasks')
    DROP PROCEDURE GEtAllTasks;
GO


CREATE PROCEDURE GEtAllTasks

AS

BEGIN
 
   SELECT * FROM Tasks;

END
GO

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'InsertTask')
    DROP PROCEDURE InsertTask;

GO

CREATE PROCEDURE InsertTask 
   
    @title NVARCHAR(255),
    @description NVARCHAR(MAX),
    @status NVARCHAR(50)

AS
BEGIN

    INSERT INTO Tasks (title, description, status)
    VALUES (@title, @description, @status);

END
GO