import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    textDecoration: 'underline',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 3,
  },
  link: {
    textDecoration: 'underline',
  },
});

const PDFDocument = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Resume</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Contact Information</Text>
        <Text style={styles.text}>Name: {formData.name}</Text>
        <Text style={styles.text}>Contact: {formData.contact}</Text>
        <Text style={styles.text}>Email: {formData.email || "N/A"}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.text}>{formData.education || "N/A"}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        <Text style={styles.text}>{formData.experience || "N/A"}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Portfolio</Text>
        <Text style={styles.link} wrap={false}>
          <Text style={styles.link}>{formData.portfolio || "N/A"}</Text>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        <View>
          {formData.skills.length > 0 ? (
            formData.skills.map((skill, index) => (
              <Text key={index} style={styles.text}>- {skill}</Text>
            ))
          ) : (
            <Text style={styles.text}>No skills added yet</Text>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Certificates</Text>
        {formData.certificates.length > 0 ? (
          formData.certificates.map((certificate, index) => (
            <Text key={index} style={styles.link} wrap={false}>
              <Text style={styles.link}>{certificate.name}</Text>: {certificate.link}
            </Text>
          ))
        ) : (
          <Text style={styles.text}>No certificates added yet</Text>
        )}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Projects</Text>
        {formData.projects.length > 0 ? (
          formData.projects.map((project, index) => (
            <Text key={index} style={styles.link} wrap={false}>
              <Text style={styles.link}>{project.name}</Text>: {project.link}
            </Text>
          ))
        ) : (
          <Text style={styles.text}>No projects added yet</Text>
        )}
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
