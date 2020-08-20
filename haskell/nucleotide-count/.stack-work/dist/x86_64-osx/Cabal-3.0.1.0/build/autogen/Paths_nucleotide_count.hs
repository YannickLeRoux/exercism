{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
module Paths_nucleotide_count (
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
version = Version [1,3,0,8] []
bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/Users/yannickleroux/Code/Learning/Exercism/haskell/nucleotide-count/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/bin"
libdir     = "/Users/yannickleroux/Code/Learning/Exercism/haskell/nucleotide-count/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/lib/x86_64-osx-ghc-8.8.3/nucleotide-count-1.3.0.8-BpiXfcncaaXCslTJD0Zcjn"
dynlibdir  = "/Users/yannickleroux/Code/Learning/Exercism/haskell/nucleotide-count/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/lib/x86_64-osx-ghc-8.8.3"
datadir    = "/Users/yannickleroux/Code/Learning/Exercism/haskell/nucleotide-count/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/share/x86_64-osx-ghc-8.8.3/nucleotide-count-1.3.0.8"
libexecdir = "/Users/yannickleroux/Code/Learning/Exercism/haskell/nucleotide-count/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/libexec/x86_64-osx-ghc-8.8.3/nucleotide-count-1.3.0.8"
sysconfdir = "/Users/yannickleroux/Code/Learning/Exercism/haskell/nucleotide-count/.stack-work/install/x86_64-osx/1359fd044c8dfc2db375d51fbad2146cb7efd0ed3bd14dea8eadba0c08afb7f7/8.8.3/etc"

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "nucleotide_count_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "nucleotide_count_libdir") (\_ -> return libdir)
getDynLibDir = catchIO (getEnv "nucleotide_count_dynlibdir") (\_ -> return dynlibdir)
getDataDir = catchIO (getEnv "nucleotide_count_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "nucleotide_count_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "nucleotide_count_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
