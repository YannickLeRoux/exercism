{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
module Paths_collatz_conjecture (
    version,
    getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

#if defined(VERSION_base)

#if MIN_VERSION_base(4,0,0)
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#else
catchIO :: IO a -> (Exception.Exception -> IO a) -> IO a
#endif

#else
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#endif
catchIO = Exception.catch

version :: Version
version = Version [1,2,1,4] []
bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/Users/yannickleroux/Code/Learning/Exercism/haskell/collatz-conjecture/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/bin"
libdir     = "/Users/yannickleroux/Code/Learning/Exercism/haskell/collatz-conjecture/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/lib/x86_64-osx-ghc-8.8.3/collatz-conjecture-1.2.1.4-7Iw3aHnVGwJAwOUvlgwdWI"
dynlibdir  = "/Users/yannickleroux/Code/Learning/Exercism/haskell/collatz-conjecture/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/lib/x86_64-osx-ghc-8.8.3"
datadir    = "/Users/yannickleroux/Code/Learning/Exercism/haskell/collatz-conjecture/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/share/x86_64-osx-ghc-8.8.3/collatz-conjecture-1.2.1.4"
libexecdir = "/Users/yannickleroux/Code/Learning/Exercism/haskell/collatz-conjecture/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/libexec/x86_64-osx-ghc-8.8.3/collatz-conjecture-1.2.1.4"
sysconfdir = "/Users/yannickleroux/Code/Learning/Exercism/haskell/collatz-conjecture/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/etc"

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "collatz_conjecture_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "collatz_conjecture_libdir") (\_ -> return libdir)
getDynLibDir = catchIO (getEnv "collatz_conjecture_dynlibdir") (\_ -> return dynlibdir)
getDataDir = catchIO (getEnv "collatz_conjecture_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "collatz_conjecture_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "collatz_conjecture_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
