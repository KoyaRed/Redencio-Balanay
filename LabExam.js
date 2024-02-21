import React, {useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [currentSection, setCurrentSection] = useState('name');

    const resumeData = {
        imageUrl: require('./Profile.jpg'),
        name: 'Redencio B. Balanay',
        course: 'Bachelor of Science in Information Technology',
        education: {
          elementary: 'Potrero I Elementary School',
          elementaryYear: '2007',
          highSchool: 'Potrero National Highschool',
          highSchoolYear: '2011',
          college: 'Global Reciprocal Colleges',
          collegeYear: '2024',
        },

        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices tincidunt libero, et congue leo vulputate eu. Donec nisi sapien, vestibulum et metus nec, eleifend interdum odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at egestas ligula. In tempor vestibulum urna at aliquam. Suspendisse consectetur, arcu at consequat venenatis, neque ante tristique augue, id pellentesque eros mi id nisl. Cras ultricies, eros nec hendrerit vehicula, massa eros venenatis mauris, sed sollicitudin diam diam at ligula. Maecenas vel eros vitae mi semper ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at urna neque. Suspendisse in diam non nibh mattis ultrices in a mauris. Proin vestibulum ullamcorper erat, in ultrices urna feugiat a. Nam tempus mi et imperdiet lacinia. Mauris fringilla leo eget blandit tristique. Donec commodo vehicula nibh quis aliquam.',
        
        projects: {
          projectName: 'SOON',
          imageSrc: 'https://www.deepdiveintel.com/wp-content/uploads/2013/09/Owl-Eye-art-300x300.jpg',
          link: 'https://so.on',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices tincidunt libero, et congue leo vulputate eu. Donec nisi sapien, vestibulum et metus nec, eleifend interdum odio.',
        },

        projects1: {
          projectName1: 'SOON',
          imageSrc1: 'https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2017/08/Ref2213/Ref2213.jpg/thumbnails/300x300',
          link1: 'https://so.on',
          description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices tincidunt libero, et congue leo vulputate eu. Donec nisi sapien, vestibulum et metus nec, eleifend interdum odio.',
        },

        contact: {
          mobile: '0951-064-0987',
          email: 'koyaredofficial@gmail.com',
        },
      };

    const handlePress = () => {
      setCurrentSection((prevSection) => {
        switch (prevSection) {
          case 'name':
            return 'education';
          case 'education':
            return 'about';
          case 'about':
            return 'projects';
          case 'projects':
            return 'projects1';
          case 'projects1':
            return 'contact';
          case 'contact':
            return 'name';
          default:
            return 'name';
        }
      });
    };

    return (
      <SafeAreaView style={{ flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
              {currentSection === 'name' && (
                <>
                  <Image source={resumeData.imageUrl} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.header}>{resumeData.name}</Text>
                    <Text style={styles.info}>{resumeData.course}</Text>
                  </View>
                </>
              )}

              {currentSection === 'education' && (
                <>
                  <View style={styles.textContainer}>
                    <Text style={styles.header1}>Education:</Text>
                    <Text style={styles.projectTitle}>
                      {'\n'}College:
                      {'\n'}
                        </Text>
                      <Text style={styles.info1}>{resumeData.education.college}</Text>
                      {' | '}
                      {resumeData.education.collegeYear}
                
                    <Text style={styles.projectTitle}>
                      {'\n'}High School:
                      {'\n'}
                        </Text>
                      <Text style={styles.info1}>{resumeData.education.highSchool}</Text>
                      {' | '}
                      {resumeData.education.highSchoolYear}
          
                    <Text style={styles.projectTitle}>
                      {'\n'}Elementary:
                      {'\n'}
                        </Text>
                      <Text style={styles.info1}>{resumeData.education.elementary}</Text>
                      {' | '}
                      {resumeData.education.elementaryYear}
                  </View>
                </>
              )}

              {currentSection === 'about' && (
                <>
                  <Image source={resumeData.imageUrl} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.header1}>About me:{'\n'}</Text>
                    <Text style={styles.about}>{resumeData.about}</Text>
                  </View>
                </>
              )}

              {currentSection === 'projects' && (
                <View style={styles.projectsContainer}>
                  <Text style={styles.header1}>Projects:</Text>
                  <Text style={styles.projectTitle}>{resumeData.projects.projectName}</Text>
                  <Image source={{ uri: resumeData.projects.imageSrc }} style={styles.projectImage} />
                  <Text style={styles.projectLink}>{resumeData.projects.link}</Text>
                  <Text style={styles.projectDescription}> {resumeData.projects.description}</Text>
                </View>
              )}

              {currentSection === 'projects1' && (
                <View style={styles.projectsContainer}>
                  <Text style={styles.header1}>Projects:</Text>
                  <Text style={styles.projectTitle}>{resumeData.projects1.projectName1}</Text>
                  <Image source={{ uri: resumeData.projects1.imageSrc1 }} style={styles.projectImage} />
                  <Text style={styles.projectLink}>{resumeData.projects1.link1}</Text>
                  <Text style={styles.projectDescription}>{resumeData.projects1.description1}</Text>
                </View>
              )}

               {currentSection === 'contact' && (
                  <View style={styles.contactContainer}>
                    <Text style={styles.header1}>Contact Me:{'\n'}</Text>
                    <Text style={styles.info1}>
                      {'\n'}Mobile: {resumeData.contact.mobile}
                      {'\n'}Email: {resumeData.contact.email}
                    </Text>
                  </View>
                )}

          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
    maxWidth: 600,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    marginBottom: 20,
  },
  textContainer: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  header1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  info: {
    fontSize: 20,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  info1: {
    fontSize: 20,
    alignSelf: 'flex-start',
    textAlign: 'left',

  },
  about: {
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
   projectsContainer: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  projectImage: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: '50%'
  },
  projectLink: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },


});

export default App;
