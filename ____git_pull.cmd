@ECHO OFF
:: Выполняет команду PULL для текущего репозитория

:: Заголовок окна - путь и имя файла с аргументами
TITLE %0 %*
ECHO;
ECHO;
ECHO ***************************************************************************
ECHO CMD-FILE: %0 %*
ECHO ***************************************************************************
ECHO;
ECHO;

:: Выполняет команду PULL
CALL ./../__Git.Scripts.Windows/__private/__git_CMD.cmd --PATH %CD% git pull

PAUSE
