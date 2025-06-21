IF NOT EXISTS (select name FROM sys.database WHERE name = 'TaskDB')
BEGIN
    
     create DATABASE TaskDB;

END